export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {
        isOpen ? (
          <p>Akşam {closeHour}'ye kadar sipariş verebilirsiniz.</p>
        ) : 
        (
          <p>Şu an kapalıyız. Açılş saati {openHour}</p>
        )
      }
    </footer>
  )
}