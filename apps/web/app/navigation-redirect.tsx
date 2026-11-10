'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NavigationRedirect(){
  const router=useRouter();
  useEffect(()=>{
    const handler=(event:MouseEvent)=>{
      const element=event.target as HTMLElement;
      const payment=element.closest<HTMLButtonElement>('.pay-button');
      if(payment&&window.location.pathname==='/booking-summary'){
        event.preventDefault();
        router.push(`/review-pay${window.location.search}`);
      }
    };
    document.addEventListener('click',handler);
    return()=>document.removeEventListener('click',handler);
  },[router]);
  return null;
}
