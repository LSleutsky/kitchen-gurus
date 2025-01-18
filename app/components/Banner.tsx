import { Link } from "react-router";

export default function Banner() {
  return (
    <section className="py-4 bg-[#F7F7F7]">
      <h1 className="text-center text-4xl font-['Open_Sans'] font-semibold">A Unique Kitchen Remodeling Experience</h1>
      <div className="grid md:grid-cols-3 pt-8 justify-items-center [&>*]:flex [&>*]:flex-col [&>*]:pb-4 [&>*]:md:pb-2">
        <span className="px-4">
          <Link
            to="https://g.co/kgs/iXh4VY6"
            target="_blank"
          >
            <img className="m-auto my-0" alt="Google Reviews logo" src="/google-reviews.png" />
          </Link>
          <p className="text-center">
            I was very pleased with the work Basement Gurus recently did at our home. They were very professional and even
            finished within a day! Armand and his crew did some awesome work. Josh really helped explaining everything
            clearly about how the procedure would work and the materials being used. I would highly recommend Basement Gurus
            to waterproof your basement.
          </p>
          <p className="text-center text-[#F98500] mt-2">-Andrew S.</p>
        </span>
        <span className="px-4">
          <Link to="https://www.yelp.com/biz/basement-gurus-philadelphia#reviews" target="_blank">
            <img className="m-auto" alt="Yelp Reviews logo" src="/yelp-reviews.png" />
          </Link>
          <p className="text-center">
            Awesome staff and service! purchased a home recently that didn't pass inspection completely and had to get the
            columns redone and a crack repaired in the foundation. Josh was so diligent in assisting me, going above and
            beyond to help me get a credit from the sellers to pay for it. Once the work began, I experienced professionalism
            from Ms. Cassie and Ms. Boni which I cannot even put into words.
          </p>
          <p className="text-center text-[#F98500] mt-2">-Miss V.</p>
        </span>
        <span className="px-4">
          <Link
            to="https://www.angi.com/companylist/us/pa/philadelphia/basement-gurus-reviews-9964580.htm#reviews-section"
            target="_blank"
          >
            <img className="m-auto mt-6" alt="Yelp Reviews logo" src="/angi-reviews.png" />
          </Link>
          <p className="text-center">
            Great! We are very happy with Phil Thistle and his team at Basement Gurus. They were very professional and
            efficient. Our basement, which had been flooding with every heavy rain, is now bone dry! Their price was
            very competitive and it was a pleasure to work with their company. Highly recommend!
          </p>
          <p className="text-center text-[#F98500] mt-2">-Jamie P.</p>
        </span>
      </div>
    </section>
  );
}