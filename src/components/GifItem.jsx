export const GifItem = ({ url, title }) => {
  return (
    <div className="card">
      <img src={url} alt="gif-img" />
      <p> {title}</p>
    </div>
  );
};
