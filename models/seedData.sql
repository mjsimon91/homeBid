INSERT INTO Members(profileImage, firstName, lastName, email, about)
VALUES ('https://www.pexels.com/photo/photography-of-man-in-white-shirt-with-round-black-analog-watch-697509/','Brian','Smith','bsmith@mail.com', 'A great seller of homes and buyer of other homes'),
('https://i.pinimg.com/236x/c6/a4/64/c6a4645d9f9af45a9c9d7b094c18a47a--portrait-ideas-girl-photos.jpg/', 'Jane', 'Doe', 'jdoe@mail.com', 'I love photography and all things related to reat estate. My homes are the best'),
('https://www.pexels.com/photo/adult-blue-sky-eyewear-facial-hair-343717/', 'John', 'Doe', 'jodo@mail.com', 'Love this place')

INSERT INTO Homes(title, addressOne, addressTwo, city, state, zipCode, description,longitude, latitude)
VALUES('The White House', '1600 Pennsylvania Ave NW','','Washington','DC', 20004, 'Not really sure what goes on here',38.8976763,77.0365298),
('United States Capitol','East Capitol St NE & First St SE','Suite 100','Washington','DC', 20500, 'This house is white',38.8899,77.0091)

INSERT INTO Bids(bidAmount, cashOffer, asIs)
VALUES (10000000.00, true, true),
(20000, false, true)

INSERT INTO ChatRooms(buyerID, sellerID)
VALUES(1,2), (1,3), (2,3)

INSERT INTO Messages(message,ChatRoomId,MemberId)
VALUES('Hello. I am interested in your home', 1, 1),
("Have you submitted a term sheet?",1,2),
("What a lovely home you have. Why is it on the market?", 2, 1),
("I am moving for my job", 2,3),
("Is your home still for sale", 3, 2),
("No, it is off the market now", 3, 3)
