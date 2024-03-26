const Img = ({ src, className, alt, onClick, id}) => {
    return (
      <img src={src} className={className} alt={alt} onClick={onClick} id={id} />
    );
  };
  
  export default Img;
