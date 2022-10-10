import { useMemo } from "react";
import { SOCIAL_MEDIA_INFO } from "../config/socials";

export const useSocialsData = () => {
  return useMemo(
    () =>
      Object.values(SOCIAL_MEDIA_INFO).filter(
        (socialMediaData) => socialMediaData.active
      ),
    [SOCIAL_MEDIA_INFO]
  );
};
