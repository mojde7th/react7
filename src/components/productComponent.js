

function ProductComponent({
  className,
  title,
  image,
  price,
  description,
  id,
  ...props
}) {
     function truncateme(input) {
       if (input.length > 20) {
         console.log(input.length);
         return input.slice(0, 20) + ".........";
       } 
         return input;
       
     }
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{truncateme(description)}</p>
        <p>rate: {props.rating.rate}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
