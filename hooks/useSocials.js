import { useMemo } from "react";
import { SocialItem, SOCIAL_MEDIA_INFO } from "../config/socials";

export const useSocials = (renderProps) =>
  useMemo(
    () =>
      Object.values(SOCIAL_MEDIA_INFO)
        .filter((socialMediaData) => socialMediaData.active)
        .map((socialMediaData) => (
          <SocialItem key={socialMediaData.url} {...socialMediaData} />
        )),
    [SOCIAL_MEDIA_INFO]
  );
