import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export const SOCIAL_MEDIA = {
  LINKEDIN: "Linked In",
  GITHUB: "Github",
  FACEBOOK: "Facebook",
  TWITTER: "Twitter",
  EMAIL: "Email",
  RESUME: "Resume",
};

export const SOCIAL_MEDIA_INFO = {
  [SOCIAL_MEDIA.LINKEDIN]: {
    url: "https://www.linkedin.com/in/ron-hagafny-ab116147/",
    Logo: FaLinkedinIn,
    type: "out",
    active: true,
  },
  [SOCIAL_MEDIA.GITHUB]: {
    url: "https://github.com/Hagafny",
    Logo: FaGithub,
    type: "out",
    active: true,
  },
  [SOCIAL_MEDIA.FACEBOOK]: {
    url: "https://facebok.com/ronha",
    Logo: FaFacebookF,
    type: "out",
    active: false,
  },
  [SOCIAL_MEDIA.TWITTER]: {
    url: "https://twitter.com/TheGafny",
    Logo: FaTwitter,
    type: "out",
    active: false,
  },
  [SOCIAL_MEDIA.EMAIL]: {
    url: "/#contact",
    Logo: AiOutlineMail,
    active: true,
  },
  [SOCIAL_MEDIA.RESUME]: {
    url: "/resume",
    Logo: BsFillPersonLinesFill,
    active: true,
  },
};

export const SocialItem = ({ url, Logo, type }) => {
  const OuterRefContainer = ({ url, children }) => (
    <a href={url} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );

  const InnerRefContainer = ({ url, children }) => (
    <Link href={url}>{children}</Link>
  );
  const Container = type === "out" ? OuterRefContainer : InnerRefContainer;

  return (
    <Container url={url}>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <Logo />
      </div>
    </Container>
  );
};
