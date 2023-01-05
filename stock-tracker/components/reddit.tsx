
/**
* @file Reddit stock tracker component.
* @author Devin Arena
* @description Handles making requests to the Reddit API and displaying the data.
* @since 1/5/2023
**/

const RedditTracker = (props: object) => {
    const subs: Array<String> = ["stocks"]

    return (
        <div className="grow flex flex-col items-center justify-start bg-stone-900 text-stone-200 m-4 p-2 overflow-auto rounded-md">
            <h1 className="text-5xl">Reddit Tracker</h1>
            <p className="text-lg">Pulls F500 stock tickers from top posts on the subreddits: 
                {" "}{subs.join(", ")}</p>
        </div>
    );
}

export default RedditTracker;