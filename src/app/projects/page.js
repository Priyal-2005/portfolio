import { redirect } from 'next/navigation';

/**
 * Legacy /projects route — redirects to the homepage Domains section.
 * Projects now live in their respective domain pages (/ai-ml, /fullstack).
 */
export default function ProjectsRedirect() {
    redirect('/#domains');
}