const ErrorDisplay = ({ error }) => {
  return (
    <div className="bg-red-600 h-fit w-fit flex flex-col self-center justify-self-center rounded p-5 gap-5">
      <p>Üzgünüz bir hata oluştu! Lütfen daha sonra tekrar deneyiniz</p>
      <h2 className="font-bold ">{error}</h2>
    </div>
  );
};

export default ErrorDisplay;
