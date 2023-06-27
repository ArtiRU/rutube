import Home from '@/components/pages/home/Home';
import Meta from '@/components/seo/Meta';

function HomePage() {
  return (
    <Meta title="Rutube" description="Домашняя страница Rutube">
      <Home />;
    </Meta>
  );
}

export default HomePage;
