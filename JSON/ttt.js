import React, { useRef, useState } from 'react'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-native'
// ...other imports

type Props = {
  onSave: (uri: string) => void
  uri: string
}

const BrightnessContrast = ({
  onSave,
  uri
}: Props) => {
  const { t } = useTranslation()
  const surfaceRef = useRef<Surface>(null)
  const [contrast, setContrast] = useState(1)
  const [brightness, setBrightness] = useState(1)
  const surfaceStyle = { width: 320, height: 320 }

  const handleOnSaveImage = async () => {
    try {
      const result = await surfaceRef.current?.glView.capture({
        format: 'png'
      })
      const captureUri = result.uri
      if (captureUri) onSave(captureUri)
    } catch (error) {
      // do nothing
    }
  }

  const handleOnCancelImage = () => {
    // code
  }

  const renderBrightnessSlider = () => {
    // code
  }

  const renderContrastSlider = () => {
    // code
  }

  return (
    <Container>
      <Surface ref={surfaceRef} style={surfaceStyle}>
        <Saturate
          {...{
            brightness: brightness,
            contrast: contrast,
            saturation: 1
          }}
        >
          {{ uri }}
        </Saturate>
      </Surface>

      <Footer>
        {renderBrightnessSlider()}
        {renderContrastSlider()}
        <Buttons>
          <IconButton
            backgroundColor={colors.neutralUI5}
            onPress={handleOnCancelImage}
            renderIcon={() => <Close color={colors.white} />}
            text={t('pictureEdit:cancelButton')}
            textColor={colors.white}
          />
          <IconButton
            backgroundColor={colors.gs1Orange}
            onPress={handleOnSaveImage}
            renderIcon={() => <Check color={colors.white} />}
            text={t('pictureEdit:saveButton')}
            textColor={colors.white}
          />
        </Buttons>
      </Footer>
    </Container>
  )
}

const shaders = Shaders.create({
  Saturate: {
    frag: GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t;
  uniform float contrast, saturation, brightness;
  const vec3 L = vec3(0.2125, 0.7154, 0.0721);
  void main() {
    vec4 c = texture2D(t, uv);
      vec3 brt = c.rgb * brightness;
      gl_FragColor = vec4(mix(
      vec3(0.5),
      mix(vec3(dot(brt, L)), brt, saturation),
      contrast), c.a);
  }`
  }
})

interface SaturationProps {
  brightness: number
  children: React.ReactNode
  contrast: number
  saturation: number
}

const Saturate = ({
  brightness,
  children,
  contrast,
  saturation
}: SaturationProps) => (
  <Node
    shader={shaders.Saturate}
    uniforms={{ contrast, saturation, brightness, t: children }}
  />
)

export { BrightnessContrast }
and this is screenshot: