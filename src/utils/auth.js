import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  
  const isAuthenticated = false; 

  if (!isAuthenticated) {
    router.push('/admin_login');
  }

  return isAuthenticated;
}