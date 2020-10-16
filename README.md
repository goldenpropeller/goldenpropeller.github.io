# v1

gather some test data from boattrader.com

replace id in the following. it may take you to a list page instead of the boat
https://www.boattrader.com/boat/6860661/

ensure the actual item page is open, then in console run this:
copy(__REDUX_STATE__.app.data)

this will put the json for the boat data we want to test with on clipboard, then paste into a file
