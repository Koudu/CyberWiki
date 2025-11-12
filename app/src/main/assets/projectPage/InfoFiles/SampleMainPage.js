import "./SampleMainPage.css"

export default function SampleMainPage(item) {
    return {
        render: () => {
            return `
                <a class="block" id="block-${item.id}">
                    <h3 id="block-num-${item.id}" class="numBlock"> ${item.num} </h3>
                    <p id="block-text-${item.id}" class="textBlock"> ${item.text} </p>
                </a>
            `;
        },
    };
}