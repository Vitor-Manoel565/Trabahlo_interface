import * as style from "./style";

interface footerProps {
  email: string,
  contactTitle: string,
  number: string,
  address: string,
  addressTitle: string
}

export default function Footer({ email,address,addressTitle, contactTitle, number }: footerProps) {
  return (
    <style.containerFooter>
      <style.containerContact>
        <style.title>{contactTitle}</style.title>
        <style.values>{email}</style.values>
      </style.containerContact>
      <style.containerAddress>
      <style.title>{addressTitle}</style.title>
        <style.values>{address}</style.values>
        <style.values>{number}</style.values>
      </style.containerAddress>
    </style.containerFooter>
  );
}
