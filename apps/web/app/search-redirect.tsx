'use client';
import { useEffect } from 'react';
export default function SearchRedirect(){useEffect(()=>{const button=document.querySelector<HTMLButtonElement>('.search-trips');if(!button)return;const handle=()=>{window.location.href='/search-results?from=Atimonan%20Port&to=Alabat%20Port&date=2026-03-20&passengers=1&vehicle=Motorcycle'};button.addEventListener('click',handle);return()=>button.removeEventListener('click',handle)},[]);return null}
