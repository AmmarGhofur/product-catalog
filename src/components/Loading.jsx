import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="loading-container">
      <Loader2 className="spinner" size={48} />
      <p>Memuat data produk...</p>
    </div>
  );
};

export default Loading;
