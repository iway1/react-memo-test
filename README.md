# Test Memo Performance
A simple test to see if `React.memo` actually has a performance hit that could ever be felt by the end user.

## Results (6x throttle)
Here are the logs:

![Results](https://user-images.githubusercontent.com/12774588/187007235-b3d92fe2-f206-4322-99d3-d324db568e9d.png)

### Time Performance
Looks like it took an additional 30ms to render 5,000 memoized components on 6x slowdown in chrome. 

Also notice that the 5,000 memoized components actually rendered 80ms faster for a single render. So it seems that memoizing everything blindly, at least in this case, actually led to a net performance gain. That's pretty interesting. 

#### Interpreting time performance data
I would interepret this as saying "there's no way a user will feel a time performance hit if I were to blindy memoize every component in my application, any they might get a noticeable performance boost". 5,000 components is way, way, way more than most applications have, and even at 5,000 it was only 30ms on 6x slowdown. That initial memoization time is basically completely negligible.

On the other hand, rendering time went down 80ms even when there was only a single render, and that **could** be noticeable. The performance gain would of course become even greater as components rerendered while the user used the app.

Plus, we could in theory prevent expensive unnecessary rerenders. In theory.

### Space Performance
It looks like we used an additional 400Kb of RAM when memoizing 5,000 components, and then another 400Kb of ram when we rendered those 5,000 components. 

#### Interpreting space performance data
That's not going to be noticeable, even if we multiplied it by 10. Almost every phone / computer nowadays has multiple Gbs of RAM. 1 Mb is more or less nothing for a personal computing device.

## Disclaimer
Of course this isn't a real world app, so take it with a grain a salt.

Should you memoizing everything? probably not, but not because the end user is going to feel a negative impact. The main issue with memoizing everything is that it takes a lot of developer time and you may have not had any real performance issues in the first place.

Can you memoize everything if you want? Seems like it. There doesn't seem to be a performance downside that would ever be noticed by an actual human. Is it technically slower to create a `memo` component? Sure, but absolute values are much more important when talking about user experience on small time scales.

The two probable outcomes seem to be that either:

1. There is no affect on user experience (more likely)
2. There is a positive effect on user experience (most of the time probably not)

If there's some situation or code example where memoizing does in fact lead to a noticeable performance hit for the end user, feel free to create an issue or submit a PR and we can add it to the repo. 
