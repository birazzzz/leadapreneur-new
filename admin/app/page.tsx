import { redirect } from 'next/navigation';

// admin.leadapreneur.com opens straight into the editor.
export default function Home() {
  redirect('/keystatic');
}
