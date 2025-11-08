    import Icon from "../icons"
    import clsx from "clsx";

    type props = {
        className: string;
    }

    export default function SpinnerText({className} : props) {
    return (
        <div className="wrapper fadeout-horizontal">

        
    <div className="marquee-text">

        <div className={clsx("h-20 flex over justify-center text-white font-secondary font-extralight  text-md items-center gap-6 marquee-text-track" , className)}>
            <div className="flex items-center gap-3 whitespace-nowrap">
                <Icon name="conservant" size={24} color="white" />
                <p>SEM CONSERVANTES</p>
            </div>

            <div className="flex items-center gap-3 whitespace-nowrap">
                <Icon name="plant" size={24} color="white" />
                <p>FRUTAS NATURAIS</p>
            </div>

            <div className="flex items-center justify-center gap-3 whitespace-nowrap">
                <Icon name="drink" size={20} color="white" />
                <p>PRONTO PARA BEBER</p>
            </div>

            <div className="flex items-center gap-3 whitespace-nowrap">
                <Icon name="signal" size={24} color="white" />
                <p>ENCONTRE SEU SIGNO</p>
            </div>

            <div className="flex items-center gap-3 whitespace-nowrap">
                <Icon name="conservant" size={24} color="white" />
                <p>SEM CONSERVANTES</p>
            </div>
            
            <div className="flex items-center gap-3 whitespace-nowrap">
                <Icon name="plant" size={24} color="white" />
                <p>FRUTAS NATURAIS</p>
            </div>

            <div className="flex items-center justify-center gap-3 whitespace-nowrap">
                <Icon name="drink" size={20} color="white" />
                <p>PRONTO PARA BEBER</p>
            </div>

            <div className="flex items-center gap-3 whitespace-nowrap">
                <Icon name="signal" size={24} color="white" />
                <p>ENCONTRE SEU SIGNO</p>
            </div>
            
        </div>
    </div>
    </div>

    );
    }
