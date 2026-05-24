import { redirect } from 'next/navigation';

/**
 * Legacy /about route — redirects to the homepage About section.
 * This page was superseded by the multi-domain architecture.
 */
export default function AboutRedirect() {
    redirect('/#about');
}