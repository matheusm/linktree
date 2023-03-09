import styles from './Link.module.css'

interface LinkProps {
  link: string
  title: string
  icon: string
}

export function Link({ link, title, icon }: LinkProps) {
  return (
    <a href={link} target="_blank" className={styles.link} rel="noreferrer">
      {title}
      {icon && <img src={icon} alt="" />}
    </a>
  )
}
