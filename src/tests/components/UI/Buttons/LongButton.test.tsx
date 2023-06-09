import LongButton from '@/components/UI/Buttons/LongButton/LongButton'
import { checkButton } from '@/utils/test-utils/button.util'
import { renderModif } from '@/utils/test-utils/renderModif.util'
import '@testing-library/jest-dom'

const testChildren = 'test'
const testImage =
  'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'

describe('<LongButton />', () => {
  // Проверяем обычную кнопку
  it('Default', () => {
    const { getByText } = renderModif(<LongButton>{testChildren}</LongButton>)

    const button = getByText(testChildren)
    expect(button).toBeInTheDocument()
  })

  // Проверяем "variant = secondary"
  it('Variant secondary', () => {
    const { container } = renderModif(
      <LongButton variant='secondary'>{testChildren}</LongButton>
    )

    checkButton(container, 'secondary')
  })

  // Проверяем картинку
  it('Img is exist', () => {
    const { container } = renderModif(
      <LongButton img={testImage}>{testChildren}</LongButton>
    )

    checkButton(container)
    const img = container.querySelector(`img[src*="${testImage}"]`)
    expect(img).toBeInTheDocument()
  })
})
