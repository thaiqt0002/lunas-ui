import { ICategory } from './types'

export const categoriesMock: ICategory[] = [
  {
    uuid: '5a3f24ea-6dff-4c63-9431-8e200d240326',
    name: ' Thời Trang',
    slug: 'thoi-trang',
    description:
      'Khi anime không chỉ là sở thích mà còn là phong cách sống, bộ sưu tập thời trang anime mang đến cho bạn những lựa chọn độc đáo. Từ áo quần cho đến phụ kiện, mỗi món đồ đều thể hiện đam mê và sự sáng tạo, kết hợp giữa thời trang hiện đại và văn hóa anime.',
    sub: [
      {
        uuid: '3847539f-4646-4372-a582-1761be5a5aa6',
        name: 'Áo ',
        slug: 'ao',
        description:
          'Áo thun, áo hoodie, hoặc áo khoác đều được thiết kế với hình ảnh nhân vật yêu thích từ các bộ anime, manga. Những chiếc áo này không chỉ giúp bạn thể hiện cá tính mà còn tạo sự thoải mái khi mặc.',
      },
      {
        uuid: 'c988cd81-6698-4daf-ab7b-2de12af901e5',
        name: 'Váy',
        slug: 'vay',
        description:
          'Váy phiên bản anime thường mang lại sự pha trộn giữa nữ tính và phong cách manga. Các mẫu váy có thể được trang trí với hình vẽ, chi tiết thêu hoặc màu sắc đặc trưng của các bộ anime, giúp bạn vừa thanh lịch, vừa nổi bật với nét đáng yêu, dễ thương.',
      },
      {
        uuid: 'ce3790b1-7793-4eb9-9d3d-aea904e8ec2b',
        name: 'Túi xách',
        slug: 'tui-xach',
        description:
          'Túi xách anime với thiết kế mang đậm dấu ấn của các bộ truyện yêu thích, từ những chiếc túi đeo vai đến túi xách mini. Những chi tiết hình vẽ nhân vật, logo, hay màu sắc tươi sáng giúp chiếc túi trở thành điểm nhấn thú vị cho phong cách thời trang của bạn.',
      },
      {
        uuid: 'f75bf038-235c-45f8-99ab-77edf87e4289',
        name: 'Quần ',
        slug: 'quan',
        description:
          'Các mẫu quần phiên bản anime có thể là quần jean, quần thể thao, hoặc quần short với những họa tiết và hình ảnh lấy cảm hứng từ các nhân vật trong anime. Những chi tiết như thêu, in hay các dây kéo trang trí mang đến sự mới mẻ và thú vị cho trang phục hàng ngày.',
      },
    ],
  },
  {
    uuid: '60106a0b-ccf6-4d09-88b7-521001935a0f',
    name: 'Đồ trang trí',
    slug: 'do-trang-tri',
    description: 'Sản phẩm trang trí túi, bàn học,...',
    sub: [
      {
        uuid: '2d1612ed-6ff2-494f-a6ad-f8d5c7df78b6',
        name: 'Block Acrylic ',
        slug: 'block-acrylic',
        description:
          'Block acrylic in nổi các hình ảnh anime giữa lớp vật liệu trong suốt, tạo chiều sâu và sự tinh tế. ',
      },
      {
        uuid: '377503b7-a601-4f38-b7ec-7974250fd62a',
        name: 'Khung Acrylic',
        slug: 'khung-acrylic',
        description:
          'Những tấm hình được bao bọc trong lớp acrylic cứng cáp và trong suốt, tạo nên vẻ đẹp tinh tế và hiện đại. ',
      },
      {
        uuid: '4b0848a9-4a0a-4ff6-81da-f70691fa05ba',
        name: 'Badge',
        slug: 'badge',
        description:
          'Badge với nhiều hình dáng như tròn, vuông, hoặc trái tim; giúp bạn tạo nét riêng cho túi xách, balo hoặc áo khoác, đồng thời mang lại cảm giác mới lạ cho bộ sưu tập cá nhân.',
      },
      {
        uuid: '503e17d7-85ae-4fcc-8292-29fec3af4cf0',
        name: 'Standee',
        slug: 'standee',
        description:
          'Các mẫu standee đa dạng từ kích thước mini đến phiên bản lớn mang lại cảm giác chân thực và sinh động.',
      },
      {
        uuid: '9fc0d544-4604-4e4f-aa23-b548815d13d9',
        name: 'Cát chảy ',
        slug: 'cat-chay',
        description:
          'Khung cát chảy mang đến sự thư giãn qua từng chuyển động của cát. Những cảnh quan liên tục thay đổi, đặc biệt ở các mẫu cát đổi màu, tạo nên trải nghiệm thị giác thú vị và mới lạ.',
      },
      {
        uuid: 'a9d5d1b4-ffdc-4632-9efd-dcd696716d43',
        name: 'Khung tranh ',
        slug: 'khung-tranh',
        description: 'Khung tranh với nhiều kích thước và kiểu dáng từ mini đến khung treo tường.',
      },
      {
        uuid: 'f3940143-299a-43ed-809f-6972d95be221',
        name: 'Keychain ',
        slug: 'keychain',
        description:
          'Những chiếc keychain làm từ cao su, acrylic hoặc kim loại, có thể được treo vào balo, túi xách, hoặc chìa khóa. ',
      },
      {
        uuid: 'ff3b17d9-f5b2-46fe-8898-463e506938c1',
        name: 'Shikishi ',
        slug: 'shikishi',
        description:
          'Những bức tranh giấy màu với hình minh họa hoặc chữ ký từ các họa sĩ nổi tiếng, cùng các phiên bản ánh kim đặc biệt.',
      },
    ],
  },
  {
    uuid: '80fd2adc-763a-4d34-b353-9a64d3779ac9',
    name: ' Đồ Điện Tử',
    slug: 'do-dien-tu',
    description:
      'Các thiết bị điện tử không chỉ nâng cao trải nghiệm công nghệ mà còn trở thành cách thể hiện tình yêu với thế giới anime và manga. Những sản phẩm ăn theo này được thiết kế với hình ảnh và phong cách của các nhân vật yêu thích, tạo nên sự kết hợp độc đáo giữa tính năng hiện đại và vẻ đẹp nghệ thuật.',
    sub: [
      {
        uuid: '0dbed8f2-1713-43a6-a660-a308808bca24',
        name: 'Chuột',
        slug: 'chuot',
        description:
          'Chuột máy tính phiên bản anime không chỉ có hiệu năng vượt trội mà còn sở hữu hoa văn, hình in từ các series nổi tiếng. Các mẫu chuột này thường đi kèm đèn RGB, mang lại sự hứng khởi cho các game thủ và fan.',
      },
      {
        uuid: '496d55d8-fd0d-4629-bc44-c3cd98d3cc40',
        name: 'Bàn Phím Cơ',
        slug: 'ban-phim-co',
        description:
          'Bàn phím cơ phiên bản anime thường đi kèm keycap thiết kế đặc biệt hoặc hình ảnh nhân vật khắc laser. Một số mẫu còn hỗ trợ LED RGB tùy biến, biến mỗi lần gõ phím thành trải nghiệm đầy màu sắc và phong cách.',
      },
      {
        uuid: '7746e536-732a-4a21-b696-1a3f5926fcb6',
        name: 'Tai Nghe',
        slug: 'tai-nghe',
        description:
          'Tai nghe phiên bản anime được thiết kế với hình ảnh các nhân vật hoặc logo biểu tượng. Có những mẫu tai nghe headset gaming được tích hợp LED RGB, hoàn thiện với các chủ đề anime và mang lại trải nghiệm âm thanh sắc nét.',
      },
      {
        uuid: '8f76eb3d-3540-4b5b-aacd-38905c8436f0',
        name: 'Loa ',
        slug: 'loa',
        description:
          'Loa bluetooth hoặc loa để bàn phiên bản anime vừa cho âm thanh chất lượng cao, vừa gây ấn tượng với thiết kế trang trí hình nhân vật hoặc hiệu ứng đèn LED theo chủ đề. Đây là lựa chọn tuyệt vời cho các fan muốn mang hơi thở anime vào từng giai điệu.',
      },
      {
        uuid: 'b9ad4623-3e02-474d-bec1-76fb11574eb4',
        name: 'Điện Thoại',
        slug: 'dien-thoai',
        description:
          'Điện thoại phiên bản anime được trang trí bằng ốp lưng, skin hoặc hình nền độc quyền lấy cảm hứng từ những bộ truyện nổi tiếng. Một số mẫu còn đi kèm giao diện tùy chỉnh hoặc nhạc chuông đặc trưng, giúp người dùng cảm nhận phong cách anime ở từng thao tác.',
      },
      {
        uuid: 'd4cb27b5-b720-4baa-ac35-183d6eda12ba',
        name: 'Máy Tính',
        slug: 'may-tinh',
        description:
          'Máy tính và laptop phiên bản anime được trang trí bằng decal, skin hoặc hình nhân vật in trực tiếp lên vỏ máy. Một số dòng còn được bán kèm bộ theme cài sẵn, biến từng phút giây làm việc hay giải trí thành cuộc hành trình trong thế giới anime.',
      },
    ],
  },
  {
    uuid: 'aa8c5300-6cd7-4535-978c-376aaab1e88a',
    name: 'Mô Hình',
    slug: 'mo-hinh',
    description:
      'Mô hình anime là những tác phẩm nghệ thuật thu nhỏ, cho phép bạn sở hữu những nhân vật yêu thích ngay tại nhà. Từ các bức tượng tỉ mỉ đến những hình mẫu đáng yêu, mỗi mô hình đều mang đến sự sống động và vẻ đẹp riêng biệt.',
    sub: [
      {
        uuid: '0b3a1952-f314-470e-9abd-c9be36348fe7',
        name: 'Nendoroid ',
        slug: 'nendoroid',
        description:
          'Nendoroid là những mô hình nhân vật anime được thiết kế theo phong cách chibi, với đặc điểm đầu to và thân hình nhỏ nhắn. Các Nendoroid thường đi kèm với nhiều phụ kiện và khuôn mặt thay đổi, tạo cơ hội cho người sưu tầm sáng tạo ra nhiều biểu cảm khác nhau.',
      },
      {
        uuid: '14d8f259-fd89-452e-8230-41b634f2ed01',
        name: 'Scale Figure',
        slug: 'scale-figure',
        description:
          'Scale figure là những mô hình nhân vật anime được chế tác tỉ mỉ, với độ chi tiết cao và tỉ lệ chính xác. Những mô hình này thường được làm từ chất liệu cao cấp như PVC, tạo nên các tác phẩm nghệ thuật hoàn hảo mà người hâm mộ không thể bỏ qua.',
      },
      {
        uuid: '5cf03862-00f3-4f4b-9dc9-7e00e1f48b91',
        name: 'Action Figure ',
        slug: 'action-figure',
        description:
          'Action figure mang lại khả năng tạo dáng nhân vật một cách linh hoạt, với các khớp động và chi tiết sắc nét. Bạn có thể dễ dàng thay đổi tư thế và tạo ra các cảnh tượng theo ý muốn, biến chúng thành những tác phẩm sống động.',
      },
      {
        uuid: '6189ba6a-f903-447c-9ff3-82e36d4d0ee9',
        name: 'Mini Figure ',
        slug: 'mini-figure',
        description:
          'Mini figure là các mô hình nhân vật nhỏ xinh, phù hợp để trưng bày trên bàn làm việc hoặc làm phụ kiện cho bộ sưu tập. Dù có kích thước nhỏ nhưng những chi tiết tinh xảo của các mini figure vẫn khiến chúng trở thành món đồ đáng sưu tầm.',
      },
      {
        uuid: 'b5201bda-b841-46fa-94dc-927486b915f8',
        name: 'Lookup ',
        slug: 'lookup',
        description:
          'Look Up là dòng mô hình với phong cách ngước lên, thường được thiết kế với nhân vật có dáng ngồi, tạo ra cảm giác như nhân vật đang nhìn lên. Đây là món đồ lý tưởng để trưng bày và tạo điểm nhấn cho không gian sống của bạn.',
      },
    ],
  },
  {
    uuid: 'bb5470c5-e516-47f9-b281-c8ca00b1a6b1',
    name: 'Sản phẩm Giấy',
    slug: 'san-pham-giay',
    description:
      'Những tấm postcard nhỏ xinh, hay những chiếc poster ấn tượng. Mỏng nhẹ nhưng đầy thu hút, vừa là vật trang trí vừa là vật sưu tầm!',
    sub: [
      {
        uuid: '24af958d-b62a-4558-9d85-24856a80c857',
        name: 'Poster',
        slug: 'poster',
        description:
          'Những hình ảnh sắc nét của các nhân vật hoặc cảnh phim nổi tiếng luôn tạo nên điểm nhấn cho căn phòng, hay chỉ đơn giản là bạn muốn sưu tầm và cất ở đâu đó...?',
      },
      {
        uuid: '43e84618-1a91-4fd6-b070-406f3e4a30b7',
        name: 'Bookmark',
        slug: 'bookmark',
        description:
          'Những chiếc bookmark anime với thiết kế độc đáo không chỉ là công cụ đánh dấu trang sách mà còn là món phụ kiện tinh tế. Chúng làm tăng niềm hứng thú mỗi khi mở lại cuốn sách yêu thích...',
      },
      {
        uuid: 'a5dfdf82-66da-4fb5-a25e-dc26500ce352',
        name: 'Card',
        slug: 'card',
        description:
          'Những chiếc card mang giá trị sưu tầm cho những fan yêu thích các nhân vật, hay là những trò chơi "gacha" thử vận may ngay trên những gói thẻ mù...!',
      },
      {
        uuid: 'b726eccf-9950-4ece-bd33-82e119fb64ea',
        name: 'Lịch',
        slug: 'lich',
        description:
          'Những tấm lịch mang phong cách và chủ đề của series bạn thích! Có từ lịch để bàn đến lịch treo tường nha',
      },
      {
        uuid: 'bf1fca23-5479-48d5-9e22-04e891d9f2fe',
        name: 'Postcard',
        slug: 'postcard',
        description:
          'Với kích thước vừa đủ, những chiếc postcard mang lại nhiều giá trị sưu tầm cho những artwork mà bạn yêu thích',
      },
      {
        uuid: 'c6210ed6-4c87-4b0f-a0de-27ddb7201968',
        name: 'Ticket',
        slug: 'ticket',
        description:
          'Thiết kế mô phỏng trên những tấm vé, một vật kỷ niệm hay là điểm nhấn cho những bạn thích sưu tầm',
      },
    ],
  },
  {
    uuid: 'bd34c8c1-1531-4d5b-a777-9aff5dddf75a',
    name: 'Sách/CD ',
    slug: 'sach-cd',
    description:
      'Sách và CD phiên bản anime là nơi hội tụ của những câu chuyện, âm nhạc, và hình ảnh đặc sắc. Những sản phẩm này không chỉ phục vụ nhu cầu giải trí mà còn mang đến cơ hội tìm hiểu sâu hơn về thế giới anime, manga, và các bộ phim yêu thích.',
    sub: [
      {
        uuid: '2a6e7c18-0cf3-4072-b521-562862e48b4f',
        name: 'Artbook',
        slug: 'artbook',
        description:
          'Artbook anime là nơi bạn có thể chiêm ngưỡng những bức tranh vẽ chi tiết và tuyệt đẹp từ các bộ anime yêu thích. Artbook cung cấp những bức hình, concept art, và tạo hình nhân vật độc đáo, mở ra thế giới nghệ thuật đằng sau các bộ phim hoạt hình.',
      },
      {
        uuid: '2bea5e29-7258-47fa-903e-c6554bf129b5',
        name: 'Game-CD ',
        slug: 'game-cd',
        description:
          'Game-CD phiên bản anime mang đến cho bạn những trải nghiệm phiêu lưu, chiến đấu, và giải đố, tất cả đều được lấy cảm hứng từ các nhân vật và thế giới anime. Những trò chơi này cho phép người chơi hóa thân vào các nhân vật yêu thích và sống trong không gian của anime.',
      },
      {
        uuid: '7ee2760e-30e1-4479-8b47-4a6087b7db7c',
        name: 'Truyện tranh ',
        slug: 'truyen-tranh',
        description:
          'Truyện tranh phiên bản anime và manga là món đồ không thể thiếu trong bộ sưu tập của bất kỳ fan nào. Từ các bộ manga truyền thống cho đến các truyện tranh colorized, những trang sách này sẽ đưa bạn vào những cuộc phiêu lưu kỳ thú cùng những nhân vật yêu thích.',
      },
      {
        uuid: '8c95341b-632b-4975-8af1-1bf3f498858b',
        name: 'Tạp chí',
        slug: 'tap-chi',
        description:
          'Các tạp chí anime cung cấp thông tin, hình ảnh và bài viết chuyên sâu về các bộ phim, nhân vật và sự kiện mới nhất trong cộng đồng anime. Những tờ tạp chí này luôn đầy ắp những bài viết thú vị, phỏng vấn với các tác giả, và không thể thiếu các poster siêu đẹp mắt.',
      },
      {
        uuid: '9c932416-276c-4ed1-b441-561ac8ee05da',
        name: 'Bluray-CD',
        slug: 'bluray-cd',
        description:
          'Các đĩa Bluray-CD chứa đựng toàn bộ bộ phim anime yêu thích, mang lại chất lượng hình ảnh và âm thanh tuyệt vời. Đây là lựa chọn lý tưởng cho những ai muốn thưởng thức những bộ phim anime yêu thích ở định dạng cao cấp, hoàn hảo cho việc sưu tầm.',
      },
      {
        uuid: 'ebb580f4-5eb7-48db-891b-aec890011c29',
        name: 'Guidebook',
        slug: 'guidebook',
        description:
          'Các guidebook giúp người hâm mộ hiểu rõ hơn về các bộ anime, từ các hướng dẫn chơi game đến các sách chỉ dẫn về cách theo dõi các series anime. Đây là nguồn tài liệu không thể thiếu để bạn không bỏ lỡ bất kỳ chi tiết thú vị nào trong hành trình khám phá thế giới anime.',
      },
      {
        uuid: 'ebb8a2b3-0d53-4cf2-8ddd-801a33331ceb',
        name: 'Tiểu thuyết ',
        slug: 'tieu-thuyet',
        description:
          'Các tiểu thuyết anime mang đến những câu chuyện không chỉ dựa trên các bộ anime nổi tiếng mà còn là những tập sách mở rộng cốt truyện, cho phép người hâm mộ khám phá thêm nhiều khía cạnh chưa được kể. Tiểu thuyết anime có thể là novel, light novel, hay những tập sách tiếp theo của series yêu thích.',
      },
    ],
  },
  {
    uuid: 'c2407c1d-1817-4b30-a048-b8ad3108fa27',
    name: 'Khác',
    slug: 'khac',
    description: 'Những món phụ kiện không thể thiếu 🌟',
    sub: [
      {
        uuid: '07b28936-88b0-4027-b1b1-7c0bec2d5a15',
        name: 'Lót chuột',
        slug: 'lot-chuot',
        description:
          'Lót chuột anime không chỉ tạo nên không gian làm việc thú vị mà còn bảo vệ bàn làm việc khỏi những vết trầy xước. Với hình ảnh nhân vật hay màu sắc nổi bật, mỗi chiếc lót chuột trở thành một điểm nhấn đáng yêu cho bàn làm việc.',
      },
      {
        uuid: '1169c3d0-1fda-45e6-a52f-431eaf9074f8',
        name: 'Boardgame',
        slug: 'boardgame',
        description:
          'Các boardgame anime không chỉ mang lại những giờ phút giải trí vui nhộn mà còn là cơ hội để bạn khám phá những câu chuyện, nhân vật từ các bộ anime yêu thích. Các trò chơi này thường có thiết kế đẹp mắt, với hình ảnh minh họa chân thực và sáng tạo.',
      },
      {
        uuid: '3d6d011e-92fc-4ac1-a438-54ec940abe97',
        name: 'Túi nilon',
        slug: 'tui-nilon',
        description:
          'Túi nilon phiên bản anime mang đến cho bạn sự tiện dụng với thiết kế dễ thương. Những chiếc túi này có thể in hình các nhân vật anime hoặc được tạo hình theo các chủ đề dễ thương, phù hợp với việc đi mua sắm hay làm quà tặng.',
      },
      {
        uuid: '4959bb41-052a-4493-b545-c6895b3025a2',
        name: 'Nước hoa ',
        slug: 'nuoc-hoa',
        description:
          'Nước hoa lấy cảm hứng từ anime không chỉ mang đến mùi hương dễ chịu mà còn khiến bạn cảm thấy như đang bước vào thế giới anime với những hương liệu độc đáo, gợi nhắc đến những cảm xúc đặc biệt từ các bộ truyện yêu thích.',
      },
    ],
  },
  {
    uuid: 'ed8749a2-7ede-4272-aa54-4cd375e6a501',
    name: 'Gấu Bông',
    slug: 'gau-bong',
    description:
      'Những chú gấu bông và búp bê plush không chỉ là món đồ trang trí dễ thương mà còn mang lại cảm giác ấm áp và thân thuộc. Mỗi loại đều mang nét đáng yêu riêng, phù hợp để ôm, trưng bày hoặc sưu tầm.',
    sub: [
      {
        uuid: '9cb59293-0a0d-4d99-a4af-a86887f7a4f5',
        name: 'Fuwa',
        slug: 'fuwa',
        description:
          'Những bạn thú bông tròn trĩnh ngộ nghĩnh, một chủng loại thú bông phổ biến, đa dạng kích thước từ bé đến lớn!',
      },
      {
        uuid: 'b7b9284a-3796-43f3-8d5f-5e1ac0fd35cf',
        name: 'Mochi, Pote',
        slug: 'mochi-pote',
        description: 'Kiểu dáng thú bông nằm, ngộ nghĩnh. Đa dạng kích thước từ bé đến lớn!',
      },
      {
        uuid: 'bd33119c-ad67-45bb-9039-511b54afcf44',
        name: 'Thú nhồi bông',
        slug: 'thu-nhoi-bong',
        description: 'Những bạn thú bông mềm mại, đa dạng chủng loại cho bạn!',
      },
      {
        uuid: 'd1f982a6-ae80-4877-8618-1472db975388',
        name: 'Gối ôm',
        slug: 'goi-om',
        description:
          'Những chiếc gối ôm với hình dáng đáng yêu không chỉ làm vật trang trí mà còn mang lại cảm giác thư giãn. Có thể là hình các nhân vật yêu thích, vừa dễ thương vừa sử dụng được khi nghỉ ngơi!',
      },
      {
        uuid: 'e816449c-8e1f-4aad-8d54-f4168eab8a33',
        name: 'Doll 20cm',
        slug: 'doll-20cm',
        description:
          'Những doll 20cm là phiên bản lớn hơn, vừa đủ để ôm vào lòng mà không chiếm quá nhiều diện tích. Thiết kế vừa đủ lớn và đáng yêu khiến chúng trở thành người bạn thân thiện của bạn!',
      },
      {
        uuid: 'eba05852-f379-41a3-8759-c33e88d15e31',
        name: 'Doll 10cm ',
        slug: 'doll-10cm',
        description:
          'Với kích thước nhỏ gọn, doll 10cm rất lý tưởng để mang theo bên mình hoặc trang trí trên bàn làm việc. ',
      },
      {
        uuid: 'f685f606-cdf6-4b56-9549-77ad32a22730',
        name: 'Chibigurumi',
        slug: 'chibigurumi',
        description:
          'Chibigurumi là những món thú nhồi bông phiên bản chibi với đầu to, thân nhỏ, cực kỳ ngộ nghĩnh đến từ nhà Bandai. Nhờ kích thước nhỏ gọn, chúng rất được yêu thích để bày biện trên bàn học hoặc làm quà tặng.',
      },
    ],
  },
]
