import Header from '@/components/Header/Header'
import { createMockRouter } from '@/utils/test-utils/createMockRouter.util'
import { renderModif } from '@/utils/test-utils/renderModif'
import { screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { useTranslation } from 'next-i18next'
import { fireEvent } from '@testing-library/react'

const mockPush = jest.fn()
const router = createMockRouter({
  push: mockPush,
})

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

describe('<Header />', () => {
  beforeAll(() => {
    renderModif(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>
    )
  })

  it('Click movies link', async () => {
    const { t } = useTranslation('header', { keyPrefix: 'left-side.titles' })

    const moviesTab = screen.getByText(t('movies'))

    fireEvent.click(moviesTab)

    expect(mockPush).toHaveBeenCalled()
  })
})