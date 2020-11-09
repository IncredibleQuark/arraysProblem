export interface IElement {
	id: string;
	offers: Array<{ offerId: string; price: number; }>;
}

export const inputArray: IElement[] = [
	{
		id: "element1",
		offers: [
			{
				offerId: "offerId1",
				price: 100,
			},
			{
				offerId: "offerId2",
				price: 110,
			}
		]
	},
	{
		id: "element1",
		offers: [
			{
				offerId: "offerId1",
				price: 100,
			},
			{
				offerId: "offerId3",
				price: 90,
			}
		]
	},
	{
		id: "element2",
		offers: [
			{
				offerId: "offerId4",
				price: 50,
			},
			{
				offerId: "offerId5",
				price: 100,
			}
		]
	},
	{
		id: "element3",
		offers: [
			{
				offerId: "offerId6",
				price: 50,
			}
		]
	},
	{
		id: "element3",
		offers: [
			{
				offerId: "offerId1",
				price: 100
			},
			{
				offerId: "offerId6",
				price: 50,
			},
			{
				offerId: "offerId7",
				price: 10,
			}
		]
	},
];
export const outputArray: IElement[] = [
	{
		id: "element1",
		offers: [
			{
				offerId: "offerId3",
				price: 90,
			},
			{
				offerId: "offerId1",
				price: 100,
			},
			{
				offerId: "offerId2",
				price: 110,
			}
		]
	},
	{
		id: "element2",
		offers: [
			{
				offerId: "offerId4",
				price: 50,
			},
			{
				offerId: "offerId5",
				price: 100,
			}
		]
	},
	{
		id: "element3",
		offers: [
			{
				offerId: "offerId7",
				price: 10,
			},
			{
				offerId: "offerId6",
				price: 50,
			},
			{
				offerId: "offerId1",
				price: 100,
			}
		]
	}
];

export const solutionFunction1 = (inputArray: IElement[]) => {

	console.time('Solving with Solution Function 1');
	const resultArray: IElement[] = [];

	inputArray.forEach((inputElement) => {
		const existingElement: IElement = resultArray.find((resultElement) => resultElement.id === inputElement.id);

		if (existingElement) {
			inputElement.offers.forEach((offer) => {
				const existingOffer = existingElement.offers.find((resultOffer) => resultOffer.offerId === offer.offerId);
				if (!existingOffer) {
					existingElement.offers.push(offer);
				}
			})
			return;
		}

		inputElement.offers.sort((a, b) => a.price - b.price);
		resultArray.push(inputElement);

	})
	console.timeEnd('Solving with Solution Function 1')
	return resultArray;

}

console.log(JSON.stringify(solutionFunction1(inputArray)));


