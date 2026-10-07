import { redirect } from 'next/navigation';

// cms.leadapreneur.com opens straight into the editor.
export default function Home() {
  redirect('/keystatic');
}
