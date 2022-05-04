import { CloseButton } from "../ClassButton";

import bugImageUrl from '../../img/bug.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const FeedbackTypes ={
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Idea',
        image:{
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt: 'imagem de um balão de pensamento'
        }
    }
}
export type FeedbackType = keyof typeof FeedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType}
                    onFeedbackRestartRequested = { handleRestartFeedback }
                />
            )}
            <footer className="text-xl text-neutral-400">
                Feito no treinamento Rocketseet <a className="underline underline-offset-2" href="#"></a>
            </footer>
        </div>
    );
}