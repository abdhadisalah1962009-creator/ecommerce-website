<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class EnsureTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('x-api-key');

        if ($token !== "MWppMARQzKrqVFuFZ+tTxTQK6uuJpVZnuZU445fb") {
            return Response::json([
                'message' => 'Invalid API Key',
            ], 400);
        }

        return $next($request);
    }
} 