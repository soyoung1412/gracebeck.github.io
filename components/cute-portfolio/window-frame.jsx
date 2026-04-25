export function WindowFrame({ title, children, className = "", bodyClassName = "" }) {
  return (
    <section className={`window-panel ${className}`}>
      <div className="window-titlebar">
        <span className="window-title">{title}</span>
        <span className="window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className={`window-body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
