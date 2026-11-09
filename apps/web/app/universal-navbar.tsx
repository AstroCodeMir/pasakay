'use client';
import Link from 'next/link';
import { Bell, ChevronDown, Menu, Ship, UserRound, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './universal-navbar.css';

const links=[['Home','/'],['Book a Trip','/search-results'],['Schedules & Fares','/schedules-fares'],['Travel Advisory','/travel-advisories'],['Help','/help']] as const;
export default function UniversalNavbar(){const path=usePathname();const [open,setOpen]=useState(false);const [profile,setProfile]=useState(false);return <header className="universal-nav"><div className="universal-inner"><Link href="/" className="universal-brand" onClick={()=>setOpen(false)}><Ship/>Pasakay</Link><button className="universal-menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'universal-links open':'universal-links'}>{links.map(([label,href])=><Link key={href} className={path===href?'active':''} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<button className="universal-icon" aria-label="Notifications"><Bell/><i>1</i></button><div className="universal-profile"><button className="universal-icon" aria-label="Profile menu" aria-expanded={profile} onClick={()=>setProfile(!profile)}><UserRound/><ChevronDown/></button>{profile&&<div className="profile-menu"><Link href="/help">Account help</Link><Link href="/">Sign out</Link></div>}</div><button className="universal-login">Log In</button><button className="universal-signup">Sign Up</button></nav></div></header>}
