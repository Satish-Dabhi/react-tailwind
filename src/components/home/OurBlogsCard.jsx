import { CardDefault } from '../../ui/CardDefault';
import first from '/img/ourblogs/first.png'
import second from '/img/ourblogs/second.png'
import third from '/img/ourblogs/third.png'
const ourBlogData = [
    {
      title: "Financial Samurai",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis vitae ligula scelerisque tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin in sem in sapien sodales dictum sit amet nec velit. Fusce et condimentum nisi.",
      img: first,
      link: "https://example.com/10-tips-healthy-living"
    },
    {
      title: "Financial Samurai",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis vitae ligula scelerisque tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin in sem in sapien sodales dictum sit amet nec velit. Fusce et condimentum nisi.",
      img: second,
      link: "https://example.com/benefits-meditation"
    },
    {
      title: "Financial Samurai",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis vitae ligula scelerisque tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin in sem in sapien sodales dictum sit amet nec velit. Fusce et condimentum nisi.",
      img: third,
      link: "https://example.com/healthy-breakfast-ideas"
    }
  ];
  
const OurBlogsCard = () => {
  return (
    <div >
   <CardDefault data={ourBlogData} />
    </div>
 
  )
}

export default OurBlogsCard
