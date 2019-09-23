/**
 * @todo @see https://github.com/aretecode/modern-stack-portfolio-react/blob/master/src/features/ObservablePicture.tsx
 */
import * as React from 'react'
import styled from 'styled-components'

export type ImagePropType = Partial<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>

export const Image = (props: ImagePropType) => {
  const anyProps = { ...props, loading: 'lazy' } as any
  return <img {...anyProps} />
}

export const StyledImage = styled(Image)``
