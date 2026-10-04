const styles = {
  primary: 'bg-accent text-[#14295e] hover:brightness-95',
  ghost: 'border border-line bg-surface text-ink hover:border-accent',
}

export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${styles[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
