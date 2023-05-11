import HighlightButton from '@/components/UI/HighlightButton/HighlightButton'
import { Meta } from '@storybook/react'
import { CSSProperties } from 'react'

type Story = StoryObj<typeof HighlightButton>

const meta: Meta = {
	title: 'UI/HighlightButton',
	parameters: {
		docs: {
			description: {
				component: 'Самая часто используемая кнопка сайта',
			},
		},
	},
	component: HighlightButton,
	argTypes: {
		children: {
			name: 'label',
			description: 'Текст кнопки',
		},
		backgroundColor: {
			name: 'color',
			description: 'Цвет кнопки',
			control: 'color',
		},
	},
}

export const Primary = ({
	backgroundColor,
	children,
}: {
	backgroundColor: CSSProperties['backgroundColor']
	children: string
}) => <HighlightButton style={{ backgroundColor }}>{children}</HighlightButton>

Primary.args = {
	backgroundColor: '#ea003d',
	children: 'Смотреть по подписке',
}

export default meta
