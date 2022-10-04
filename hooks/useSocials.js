import { useMemo } from "react";
import { SocialItem, SOCIAL_MEDIA_INFO } from "../config/socials";

export const useSocials = ({ className }) =>
  useMemo(
    () =>
      Object.values(SOCIAL_MEDIA_INFO)
        .filter((socialMediaData) => socialMediaData.active)
        .map((socialMediaData) => (
          <SocialItem
            key={socialMediaData.url}
            {...socialMediaData}
            className={className}
          />
        )),
    [SOCIAL_MEDIA_INFO]
  );
