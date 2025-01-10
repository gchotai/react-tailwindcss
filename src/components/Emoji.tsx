import bullEye from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";

interface Prop {
  rating: number;
}
const Emoji = ({ rating }: Prop) => {
  if (rating < 3) return null;
  const emojiMap = {
    3: { src: meh, alt: "Meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullEye, alt: "exceptioal" },
  };
  return (
    <div className="flex justify-end items-end">
      {Object.entries(emojiMap)
        .filter(([key]) => key === String(rating))
        .map(([_, { src, alt }]) => (
          <img src={src} alt={alt} className="w-[25px] h-[25px]" key={rating} />
        ))}
    </div>
  );
};

export default Emoji;
