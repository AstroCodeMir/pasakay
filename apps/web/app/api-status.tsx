'use client';
import { useEffect, useState } from 'react';
export function ApiStatus(){const [status,setStatus]=useState<'checking'|'online'|'offline'>('checking'); useEffect(()=>{fetch(`${process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000'}/api/health`).then(r=>{if(!r.ok)throw new Error();setStatus('online')}).catch(()=>setStatus('offline'))},[]); return <span>{status==='checking'?'Checking services':status==='online'?'API connected':'API unavailable'}</span>}
