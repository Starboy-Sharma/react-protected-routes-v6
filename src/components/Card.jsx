// @ts-nocheck

function Message({ title, message }) {
  return (
    <section className="hero is-primary">
  <div className="hero-body">
    <p className="title">{title}</p>
    <p className="subtitle">{message}</p>
  </div>
</section>
  );
}



export default Message;
