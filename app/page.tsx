import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Click to unlock', action: 'post_redirect'}
  ],
  image: 'https://phettaverse.mypinata.cloud/ipfs/QmcYkXSMoa9rViP4enFtVYNeT2GKyUFPFBRNvJBTtNUMvU/1.png',
  post_url: 'https://redirect-frame.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Learn About The Phettaverse',
  description: 'Learn today!',
  openGraph: {
    title: 'Learn About The Phettaverse',
    description: 'Learn today!',
    images: ['https://phettaverse.mypinata.cloud/ipfs/QmcYkXSMoa9rViP4enFtVYNeT2GKyUFPFBRNvJBTtNUMvU/1.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/1.png'}/>
    </>
  );
}

