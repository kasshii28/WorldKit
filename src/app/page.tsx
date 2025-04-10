import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Button>
        <Link href="/tools/UnitConverter">単位変換ツール</Link>
      </Button>      
    </div>
  );
}
