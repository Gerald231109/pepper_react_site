import { stock } from '../constants/copyright';

export default function Stock() {
  return (
    <section className="stock">
      <div className="stock__text">
        <h1 className="stock__title">{stock.title}</h1>
        <p className="stock__desc">{stock.text}</p>
      </div>
      <img alt="" className="stock__phone" src={stock.img} />
    </section>
  );
}
