<template>
    <view class="tool-food">
        <uni-search-bar
            placeholder="输入食物名称"
            @input="onInput"
            @confirm="onSearch"
        ></uni-search-bar>
        <view class="history-list" v-show="!hasSearchWord">
            <view
                class="food-item"
                v-for="(item, index) in historyList"
                :key="index"
            >
                <uni-tag
                    style="display:inline-block"
                    :text="item.text"
                    :type="item.color"
                    :circle="true"
                ></uni-tag>
            </view>
        </view>
        <view class="food-result" v-show="hasSearchWord">
            <uni-list>
                <uni-list-item
                    v-for="(item, index) in searchResult"
                    :key="index"
                ></uni-list-item>
            </uni-list>
        </view>
    </view>
</template>
<script>
import { uniSearchBar, uniTag, uniList, uniListItem } from '@dcloudio/uni-ui';

const TagColor = {
    0: 'primary',
    1: 'success',
    2: 'warning',
    3: 'error',
    4: 'royal'
};

export default {
    data() {
        return {
            historyList: [],
            searchWord: '',
            searchResult: []
        };
    },
    components: {
        uniSearchBar,
        uniTag,
        uniList,
        uniListItem
    },
    computed: {
        hasSearchWord() {
            return this.searchWord.length > 0;
        }
    },
    methods: {
        randomColor() {
            let max = Object.keys(TagColor).length;
            return TagColor[Math.floor(Math.random() * max)];
        },
        onInput({ value }) {
            this.searchWord = value;
        },
        onSearch(e) {
            uni.request({
                url: 'http://localhost:3000/weather',
                data: {
                    location: `${location.latitude}:${location.longitude}`
                },
                dataType: 'json',
                success: ({ data }) => {
                    const { location, now } = data.results[0];
                    self.location = location;
                    self.now = now;
                }
            });
        }
    },
    onLoad() {
        try {
            const list = uni.getStorageSync('food_history');
            if (list instanceof Array) {
                list.forEach(item => (item.color = this.randomColor()));
                this.HistoryList = list;
            }
        } catch (error) {
            console.log('获取食物历史出错');
        }
    }
};
</script>
<style lang="scss">
.history-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    .food-item {
        padding: 15rpx;
    }
}
</style>
