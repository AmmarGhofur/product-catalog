import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <AlertCircle size={48} className="error-icon" />
      <h2>Terjadi Kesalahan</h2>
      <p>{message || "Gagal memuat data dari server."}</p>
    </div>
  );
};

export default ErrorMessage;
