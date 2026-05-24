import { redirect } from 'next/navigation';

/**
 * Legacy /skills route — redirects to the homepage Skills section.
 * This page was superseded by the multi-domain architecture.
 */
export default function SkillsRedirect() {
    redirect('/#skills');
}