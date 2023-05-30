
type Props = {
    handler: (sender: string) => void,
}

export default function EffectComponent({handler}: Props) {
    const sender = "EffectComponent"

    return (
        <>
            <p>Hello Effect Component</p>
            <button onClick={() => handler(sender)}>Send to Parent Component</button>
        </>
    )
}
