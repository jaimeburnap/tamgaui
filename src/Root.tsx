import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'

import { Button, TamaguiProvider, YStack, XStack, Text, Select } from 'tamagui'

import config from './tamagui.config'

const items = [
	{ name: 'Apple' },
	{ name: 'Pear' },
	{ name: 'Blackberry' },
	{ name: 'Peach' },
	{ name: 'Apricot' },
	{ name: 'Melon' },
	{ name: 'Honeydew' },
	{ name: 'Starfruit' },
	{ name: 'Blueberry' },
	{ name: 'Raspberry' },
	{ name: 'Strawberry' },
	{ name: 'Mango' },
	{ name: 'Pineapple' },
	{ name: 'Lime' },
	{ name: 'Lemon' },
	{ name: 'Coconut' },
	{ name: 'Guava' },
	{ name: 'Papaya' },
	{ name: 'Orange' },
	{ name: 'Grape' },
	{ name: 'Jackfruit' },
	{ name: 'Durian' },
]


export const Root = () => {
    return (
        <TamaguiProvider config={config} defaultTheme="light">
            <YStack flexGrow={1} ai="center" jc="center" width={`100%`}>
                <Button>Hello world</Button>
                <XStack
					width={`100%`}
					backgroundColor="#fff"
					justifyContent="end"
					alignItems="center"
					flexDirection="column"
					flexGrow={1}
                >
                    <YStack space="$3">
						<Select defaultValue="" size={3}>
							<Select.Trigger>
								<Select.Value placeholder="Search..." />
							</Select.Trigger>
							<Select.Content>
								<Select.ScrollUpButton
									alignItems="center"
									justifyContent="center"
									position="relative"
									width="100%"
									height="$3"
								>
									<YStack zIndex={10}>
										<ChevronUp size={20} />
									</YStack>
								</Select.ScrollUpButton>
								<Select.Viewport height="100px">
										<Select.Item index={0} value={`1`}>
											<Select.ItemText>1</Select.ItemText>
										</Select.Item>
										<Select.Item index={1} value={`2`}>
											<Select.ItemText>2</Select.ItemText>
										</Select.Item>
										<Select.Item index={2} value={`3`}>
											<Select.ItemText>3</Select.ItemText>
										</Select.Item>
										<Select.Item index={3} value={`4`}>
											<Select.ItemText>4</Select.ItemText>
										</Select.Item>
										<Select.Item index={4} value={`5`}>
											<Select.ItemText>5</Select.ItemText>
										</Select.Item>
										<Select.Item index={5} value={`6`}>
											<Select.ItemText>6</Select.ItemText>
										</Select.Item>
										<Select.Item index={6} value={`7`}>
											<Select.ItemText>7</Select.ItemText>
										</Select.Item>
								</Select.Viewport>
								<Select.ScrollDownButton
									alignItems="center"
									justifyContent="center"
									position="relative"
									width="100%"
									height="$3"
								>
									<YStack zIndex={10}>
										<ChevronDown size={20} />
									</YStack>
								</Select.ScrollDownButton>

							</Select.Content>
						</Select>

					</YStack>
                </XStack>
            </YStack>
        </TamaguiProvider>
    )
}
