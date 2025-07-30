import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SECURITY_CONFIG } from '@/lib/security'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 安全头部设置
  const securityHeaders = {
    // 内容安全策略
    'Content-Security-Policy': Object.entries(SECURITY_CONFIG.CSP_DIRECTIVES)
      .map(([key, values]) => `${key} ${values.join(' ')}`)
      .join('; '),
    
    // XSS 防护
    'X-XSS-Protection': '1; mode=block',
    
    // 防止点击劫持
    'X-Frame-Options': 'DENY',
    
    // 防止MIME类型嗅探
    'X-Content-Type-Options': 'nosniff',
    
    // 引用策略
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // 权限策略
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    
    // 严格传输安全 (HTTPS)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // 缓存控制
    'Cache-Control': 'no-store, max-age=0',
  }

  // 添加安全头部
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // CORS 处理
  const origin = request.headers.get('origin')
  if (origin && SECURITY_CONFIG.CORS_ORIGINS.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')

  // 速率限制检查 (简单实现)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const rateLimitKey = `rate_limit:${ip}`
  
  // 这里可以集成 Redis 或其他存储来实现真正的速率限制
  // 目前只是示例实现

  // 路径安全检查
  const path = request.nextUrl.pathname
  
  // 阻止访问敏感文件
  const sensitivePaths = [
    '/.env',
    '/.git',
    '/.htaccess',
    '/wp-config.php',
    '/config.php',
    '/admin.php',
    '/phpinfo.php',
  ]
  
  if (sensitivePaths.some(sensitivePath => path.includes(sensitivePath))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // 阻止 SQL 注入尝试
  const sqlInjectionPatterns = [
    /(\b(union|select|insert|update|delete|drop|create|alter)\b)/i,
    /(\b(or|and)\b\s+\d+\s*=\s*\d+)/i,
    /(\b(union|select)\b.*\bfrom\b)/i,
    /(\b(union|select)\b.*\bwhere\b)/i,
  ]
  
  const url = request.nextUrl.toString()
  if (sqlInjectionPatterns.some(pattern => pattern.test(url))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // 阻止 XSS 尝试
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
  ]
  
  if (xssPatterns.some(pattern => pattern.test(url))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 